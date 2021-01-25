FROM python:3.7-alpine
WORKDIR /app
RUN apk update
# dependencies for psycopg2
RUN apk add postgresql-dev gcc python3-dev musl-dev zlib-dev
# depedencies needed for google_images_search
RUN apk add jpeg-dev zlib-dev freetype-dev lcms2-dev openjpeg-dev tiff-dev tk-dev tcl-dev
# some other stuff needed
RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt





