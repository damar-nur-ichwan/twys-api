require('dotenv').config()

module.exports = {
    host: process.env['HOST'] || 'localhost',
    port: process.env['PORT'] || 3000,
    publicKey: process.env.PUBLIC_KEY || 'secret',
    firebase: {
        type: process.env.FIREBASE_TYPE,
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        client_id: process.env.FIREBASE_CLIENT_ID,
        auth_uri: process.env.FIREBASE_AUTH_URI,
        token_uri: process.env.FIREBASE_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
    },
    path: {
        user:{
            register: {
                apply: "/api/user/register/apply",
                verify: "/api/user/register/verify"
            },
            forgot: {
                apply: "/api/user/forgot/apply",
                verify: "/api/user/forgot/verify"
            },
            change: {
                apply: "/api/user/change/apply",
                verify: "/api/user/change/verify"
            },
            login: "/api/user/login"
        },
        data:{
            filter: "/api/data/filter",
            technical: "/api/data/technical",
            profile: "/api/data/profile",
            summary: "/api/data/summary",
            dividend: "/api/data/dividend",
            ratio: "/api/data/ratio",
            financial: "/api/data/financial",
            history: "/api/data/history",
            overview: "/api/data/overview",
            about: "/api/data/about",
            url: "/api/data/url"
        }
    },
    status: {
        "4xx": {
            400: {
                status: "400",
                message: "Bad Request"
            },
            401: {
                status: "401",
                message: "Unauthorized"
            },
            403: {
                status: "403",
                message: "Access to that resource is forbidden"
            },
            404: {
                status: "404",
                message: "Not Found"
            },
            409: {
                status: "409",
                message: "Data already exist"
            }
        },
        "5xx":{
            500:{
                status: "500",
                message: " There was an error on the server and the request could not be completed"
            }
        }
    }
}

