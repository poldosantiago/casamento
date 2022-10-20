const converterJSONparaCSV = (objArray, keys) => [
keys.join(';'), ...objArray.map(
    row => keys.map(k => row[k] || '')
    .join(';'))].join('\n');

function fazerDownloadArquivo(content, filename, contentType){
    if(!contentType){
        contentType = 'application/octet-stream';
    }
    var a = document.createElement('a');
    var blob = new Blob([content], {'type':contentType});
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}

const baixar = {
    converterJSONparaCSV,
    fazerDownloadArquivo
}

export default baixar;