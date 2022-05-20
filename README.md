# TWYS API
This is the backend of the TWYS API application. This application was developed by Damar Nur Ichwan. This app is in the process of being refactored for scalability purposes from previous backend versions.

## ENV
### Environtment proccess
- ```NODE_ENV```: set to *test*, *development,* or *production*, by default is *development*

### Auth Public Key Settings (*)
- ```PUBLIC_KEY```: set public key for json web token. by default is *secret*

### Host & Port Settings
- ```HOST```: set the HOST, by default is *localhost*
- ```PORT```: set the PORT, by default is *3000*

### Firebase Settings (*)
Please set your Firebase Service Account here
```
FIREBASE_TYPE
FIREBASE_PROJECT_ID
FIREBASE_PRIVATE_KEY_ID
FIREBASE_PRIVATE_KEY
FIREBASE_CLIENT_EMAIL
FIREBASE_CLIENT_ID
FIREBASE_AUTH_URI
FIREBASE_TOKEN_URI
FIREBASE_AUTH_PROVIDER_X509_CERT_URL
FIREBASE_CLIENT_X509_CERT_URL
```

### Tracer
To trace this application via *Jaeger* or *Zipkin*. Before use this env, please make sure Jaeger or Zipkin already instaled to the server.
- ```INSTANCE_NAME```: by default *twys-backend*
- ```EXPORTER```: by default *jaeger*
- ```EXPORTER_URL```: by default *http://localhost:14268*