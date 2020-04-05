exports.handler = async event => {
    var ip = request.headers['x-forwarded-for'] || 
    request.connection.remoteAddress || 
    request.socket.remoteAddress ||
    (request.connection.socket ? request.connection.socket.remoteAddress : null);

    return {
        status: 200,
        body: ip
    }
}