FROM python:3.11.3

WORKDIR /app
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . /app
EXPOSE 5000
CMD ["uvicorn", "web.main:app", "--host", "0.0.0.0", "--port", "5000", "--reload"]