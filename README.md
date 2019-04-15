# Working in groups, clone the following project and complete the following steps

1. npm install in main directory
2. navigate to public directory
3. npm install in public directory
4. run ng build --watch in public directory
5. navigate to main directory
6. run nodemon app.js
7. add the following console.log()'s statements so they are displayed in this order
    1. console.log('initializing HTTP Client in Angular Service');
    2. console.log('1');
    3. console.log('initializing HTTP Service in Angular component');
    4. console.log(2);
    5. console.log('making call to Angular Service from Angular component')
    6. console.log('3');
    7. console.log('angular service calling express server')
    8. console.log('4');
    9. console.log('received request from client, calling DB now');
    10. console.log('5');
    11. console.log('got response from DB, and sending response to client')
    12. console.log('6');
    13. console.log('back in angular component, with express server response');
    14. console.log('7');
    15. `<p>I will be displayed after component variable 'quotes' is defined</p>`
    16. `<p>8</p>`