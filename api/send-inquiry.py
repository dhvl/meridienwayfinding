from http.server import BaseHTTPRequestHandler
import json
import os
import re
import resend
from dotenv import load_dotenv

load_dotenv()

resend.api_key = os.getenv("RESEND_API_KEY")

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length) if content_length > 0 else b'{}'
        try:
            data = json.loads(post_data)
        except Exception:
            data = {}

        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        message = data.get('message', '').strip()
        contact_email = os.getenv("CONTACT_EMAIL", "info@meridienwayfinding.co.uk")

        if not name or not email or not message:
            self.send_response(400)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"error": "Missing required fields (name, email, message)"}).encode())
            return

        subject = f"New Wayfinding Inquiry: {data.get('service', 'General')} from {name}"
        
        # Validate email format to prevent Resend 422 error
        is_valid_email = bool(re.match(r"[^@]+@[^@]+\.[^@]+", email))
        
        reply_to_email = email if is_valid_email else "do-not-reply@meridianwayfinding.co.uk"
        email_note = "" if is_valid_email else "<p style='color: red; font-weight: bold;'>⚠️ WARNING: The sender provided an invalid email address. You cannot reply directly to this email. Please check their phone number or organisation details if provided.</p>"

        html_content = f"""
        {email_note}
        <h2>New Wayfinding Project Inquiry</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Organisation / Company:</strong> {data.get('company', 'N/A')}</p>
        <p><strong>Email:</strong> {email} {"(INVALID)" if not is_valid_email else ""}</p>
        <p><strong>Phone:</strong> {data.get('phone', 'N/A')}</p>
        <p><strong>Project Type / Sector:</strong> {data.get('service', 'N/A')}</p>
        <hr>
        <p><strong>Project Description / Message:</strong></p>
        <p style="white-space: pre-wrap;">{message}</p>
        """

        try:
            from_email = os.getenv("FROM_EMAIL", "Meridian Wayfinding <onboarding@resend.dev>")
            params = {
                "from": from_email,
                "to": [contact_email],
                "subject": subject,
                "html": html_content,
                "reply_to": reply_to_email
            }
            resend.Emails.send(params)
            
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"message": "Inquiry sent successfully"}).encode())
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode())
        
        return

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
