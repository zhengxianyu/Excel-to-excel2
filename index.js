$(function() {
  // let worker=new Worker('worker.js');
  let worker = new Worker (
    URL.createObjectURL(
      new Blob(
        [
          "(" + worker_function.toString() + ")()"
        ], {
          type: 'text/javascript'
        }
      )
    )
  );

  worker.postMessage('hello word');
  let newExcelList = [];
  worker.onmessage=function(event) {
    newExcelList = event.data;
    console.log("==data")
    console.log(data)
  };
  worker.onerror = function(event) {
    console.log(event.fileName, event.lineo, event.message);
  };
})
