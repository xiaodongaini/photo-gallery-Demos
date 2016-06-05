//利用自执行函数，将图片名信息转换为图片路径信息
imageDatas = (function getImageURL(imageDatasArr){
	for(var i=0, j=imageDatasArr.length; i<j; i++){
		var singleImageData = imageDatasArr[i];
		singleImageData.imageURL = '../images/' + singleImageData.fileName;
		imageDatasArr[i] = singleImageData;

	}
	return imageDatasArr;
})(imagesDatas);

console.log(imageDatas);