function uploadPhoto() {
    var fileInput = document.getElementById('file-input');
    var file = fileInput.files[0];

    if (file) {
        var formData = new FormData();
        formData.append('photo', file);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/upload', true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                displayPreview(response.photoUrl);
            }
        };

        xhr.send(formData);
    }
}

function displayPreview(photoUrl) {
    var previewImage = document.getElementById('preview-image');
    previewImage.src = photoUrl;

    var previewContainer = document.getElementById('preview-container');
    previewContainer.style.display = 'block';
}
