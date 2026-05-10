# skylerhalll.com

Personal portfolio website built with Python & Flask

## Tech Stack

- Python 3.x
- Flask
- Jinja2 (templating)

## Local Development

### Setup

1. Activate the virtual environment:
   ```bash
   .venv\Scripts\Activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the development server:
   ```bash
   python app.py
   ```

   The site will be available at `http://localhost:5000`

## Project Structure

```
.
├── app.py              # Flask application entry point
├── requirements.txt    # Python dependencies
├── templates/          # HTML templates (Jinja2)
├── static/             # CSS, JS, images
│   ├── css/
│   └── js/
└── public/             # Additional assets
```

## Deployment

For production deployment, use Gunicorn or similar WSGI server.

## Notes

- Portfolio site to keep Python projects organized
- Under active development
