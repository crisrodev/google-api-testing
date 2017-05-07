
export default function setRoutes(service, routes){
    return new Promise((resolve, reject)=>{
        for(let uri in routes){
            if(routes.hasOwnProperty(uri)){
                let route = service.route(uri);
                setControllers(route, routes[uri]);
            }
        }
        return resolve();
    });
}

function setControllers(route, controllers){
    for(let methodName in controllers){
        if(controllers.hasOwnProperty(methodName)){
            let methods = ["get", "post", "put", "delete"];
            let method = methods.find(name => name === methodName);
            if(method) route[method](controllers[method]);
        }
    }
}
