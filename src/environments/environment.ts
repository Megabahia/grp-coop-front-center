// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    hmr: false,
    apiUrl: 'https://api-coop-test.bigpuntos.com',
    // apiUrl: 'http://127.0.0.1:8000',
    setKey: '6Lf0IKglAAAAABFz3mTDdcDwDjhmDm2ZILZQnhB-',
    firebaseConfig : {
        apiKey: 'AIzaSyCJjLY5GLMkwBgxQqyj2q-GDOEjHNg07ig',
        authDomain: 'grp-sanjose-7eb00.firebaseapp.com',
        projectId: 'grp-sanjose-7eb00',
        storageBucket: 'grp-sanjose-7eb00.appspot.com',
        messagingSenderId: '61030715800',
        appId: '1:61030715800:web:ca8331b41bb792a5c59bed'
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
