const axios = require('axios');

let ApiService = function(){

};

AtlasApiService.prototype.get = function(){
    return axios({
        method:'get',
        url: url,
        headers: {
            apiKey: config.atlas.apiKey,
            contentType: 'application/json'
        },
    })
        .catch(err=>{
            throw(err.response ? err.response.data || err.response : err);
        });
};

AtlasApiService.prototype.delete = function(endpoint){
	// return axios.delete(config.atlas.baseUrl + endpoint)
	// 	.catch(err=>{
	// 		throw(err.response ? err.response.data || err.response : err);
	// 	});

    return axios({
        method:'delete',
        url: config.atlas.baseUrl + endpoint,
        headers: {
            apiKey: config.atlas.apiKey,
            contentType: 'application/json'
        },
    })
        .catch(err=>{
            throw(err.response ? err.response.data || err.response : err);
        });
};
AtlasApiService.prototype.getOne = function(endpoint,id){
    // return axios.get(config.atlas.baseUrl + endpoint + '/' + id)
    // .catch(err=>{
    //     throw(err.response ? err.response.data || err.response : err);
    // });

    return axios({
        method:'get',
        url: config.atlas.baseUrl + endpoint + '/' + id,
        headers: {
            apiKey: config.atlas.apiKey,
            contentType: 'application/json'
        },
    })
        .catch(err=>{
            throw(err.response ? err.response.data || err.response : err);
        });
};
AtlasApiService.prototype.getAssociation = function(endpoint,id,association){
    // return axios.get(config.atlas.baseUrl + endpoint + '/' + id + '/' + association)
    // .catch(err=>{
    //     throw(err.response ? err.response.data || err.response : err);
    // });

    return axios({
        method:'get',
        url: config.atlas.baseUrl + endpoint + '/' + id + '/' + association,
        headers: {
            apiKey: config.atlas.apiKey,
            contentType: 'application/json'
        },
    })
        .catch(err=>{
            throw(err.response ? err.response.data || err.response : err);
        });
};
AtlasApiService.prototype.post = function(endpoint, data){
    // return axios.post(config.atlas.baseUrl + endpoint, data)
    // .catch(err=>{
    //     throw(err.response ? err.response.data || err.response : err);
    // });

    return axios({
        method:'post',
        url: config.atlas.baseUrl + endpoint,
        data: data,
        headers: {
            apiKey: config.atlas.apiKey,
            contentType: 'application/json'
        },
    })
        .catch(err=>{
            throw(err.response ? err.response.data || err.response : err);
        });
};
AtlasApiService.prototype.put = function(endpoint, data){
    let url = config.atlas.baseUrl + endpoint;
    if(data){
        data.updated_at = moment().utc().format('YYYY-MM-DD HH:mm:ss');
    }
    // return axios.put(url, data)
    // .catch(err=>{
    //     throw(err.response ? err.response.data || err.response : err);
    // });

    return axios({
        method:'put',
        url: config.atlas.baseUrl + endpoint,
        data: data,
        headers: {
            apiKey: config.atlas.apiKey,
            contentType: 'application/json'
        },
    })
        .catch(err=>{
            throw(err.response ? err.response.data || err.response : err);
        });
};
AtlasApiService.prototype.assert = function(endpoint,data){
    // let url = config.atlas.baseUrl + endpoint+'/assert';
    // return axios.post(url,data)
    // .catch(err=>{
    //     throw(err.response ? err.response.data || err.response : err);
    // });
    return axios({
        method:'post',
        url: config.atlas.baseUrl + endpoint + '/assert',
        data: data,
        headers: {
            apiKey: config.atlas.apiKey,
            contentType: 'application/json'
        },
    })
        .catch(err=>{
            throw(err.response ? err.response.data || err.response : err);
        });
};
AtlasApiService.prototype.uploadContractDocument = function(data, file, fileName) {
    let url = config.atlas.baseUrl + 'ContractDocuments' + '/' + data.id + '/upload/';
    let pathExtension = path.extname(fileName);
    let mt = mimeTypes.detectMimeType(pathExtension);

    return requestPromise.post({
        url: url,
        headers:{
            "Content-Type":mt,
            "apiKey": config.atlas.apiKey
        },
        formData: {
            file: {
                value:file,
                options:{
                    filename:fileName,
                    contentType:mt
                }
            }
        }
    }).then((res)=>{
        return JSON.parse(res);
    })
    .catch((err)=>{
        return JSON.parse(err);
    });
};
module.exports =  new AtlasApiService();
