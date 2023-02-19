// import newLogo from './extensions/download.png'
// import favicon from './extensions/favicon.png'

const config = {
  locales: ['ar'],
  translations: {
    ar: {
      City: 'مدينة',
      "global.plugins.upload": "الصور",
      "Media Library": "الصور",
      "Email": "ايميل"
    },
  },

//   config: {
//     locales: ['ar']
// }
}


const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
// export default {
//   config: {
//     locales: ['ar'],
// //     translations: {
// //       en: {
// //         "app.components.LeftMenu.navbrand.title": "Michael",
// //         "Auth.form.welcome.title": "Welcome to Real State!",
// // }
// //       },
//   },
//   bootstrap() {},
// }
 