FROM python:3.10-slim

RUN apt-get update && apt-get install -y \
    tesseract-ocr \
    libgl1-mesa-glx \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 3978

CMD ["gunicorn", "-b", "0.0.0.0:3978", "--timeout", "120", "run:app"]