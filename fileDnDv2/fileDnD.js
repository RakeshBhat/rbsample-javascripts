
/*function divClicked(){
  // Setup the dnd listeners.
  var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);   
}*/

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</li>');
        
          var reader = new FileReader();

      // Closure to capture the file information.
              reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
            callback(e.target.result);
        };
      })(f);
      
        // Read in the image file as a data URL.
      reader.readAsDataURL(f);
      //sleep(5000); 
      //reader.readAsArrayBuffer(f);
     //console.log(theFile.target.result);
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }
    
   function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
   }
    
  var callback = function(fileData) {
      alert(fileData);
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

