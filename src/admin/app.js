// import newLogo from './extensions/download.png'
import favicon from './extensions/favicon.png'

const config = {
  config: {
        locales: ['ar','en'],
        translations: {
          en: {
            "app.components.LeftMenu.navbrand.title": "Michael",
            "Auth.form.welcome.title": "Welcome to Real State!",
            "global.marketplace": "Fuck"
    }
          },
          head: {
            favicon: favicon
          },
          theme:{
            colors: {
              buttonPrimary600:'#ee5e52' ,
              primary600: '#b72b1a'
              
            }
          }
}}


const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
// export default {
//   config: {
//     locales: ['en'],
//     translations: {
//       en: {
//         "app.components.LeftMenu.navbrand.title": "Michael",
//         "Auth.form.welcome.title": "Welcome to Real State!",
// }
//       },
//   },
//   bootstrap() {},
// }
 