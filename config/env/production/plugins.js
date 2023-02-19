module.exports = ({env}) =>({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        // ... any custom nodemailer options
        secure: true
      },
      settings: {
        defaultFrom: 'tayseer@vuedale.com',
        defaultReplyTo: 'tayseer@vuedale.com',
      },
    },
  },
    upload: {
        config: {
          provider: 'aws-s3',
          providerOptions: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: env('AWS_REGION'),
            params: {
              Bucket: env('AWS_BUCKET'),
            },
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      },
      "google-map-picker": {
        config: {
        apiKey: env("GOOGLE_PUBLIC_KEY"), // required
        default_center: { lat: 54.106438, lng: 11.556940 }, // required
        favorites_places: [
            {
            title: "Berlin",
            coordinates: { lat: 52.518536, lng: 52.518536 },
            },
            {
            title: "Zurich",
            coordinates: { lat: 47.384168, lng: 8.526831 },
            },
            {
            title: "Oslo",
            coordinates: { lat: 59.911002, lng: 10.756167},
            },
        ],
        },
    },
})