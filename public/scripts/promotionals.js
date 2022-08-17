class Promotionals {
    constructor() {
        this.ad = [];
        this.gif = [];
        this.image = [];

        this.addGifs();
        this.addImages();
        this.addAds();
    }

    getContent(contentType, index) {
        return this[`${contentType}`][!!index && typeof index === 'number' ? index : randomNumber(this[contentType].length)]
    }

    addAds() {
        this.ad = [...this.gif, ...this.image]
    }

    addGifs() {
        console.log({media})
        this.gif = [...this.getObjectValues(media.gif)]
    }

    addImages() {
        this.image = [...this.getObjectValues(media.jpeg), ...this.getObjectValues(media.png)]
    }
    
    getObjectValues(arrayOfObjects) {
        let result = [];
        arrayOfObjects.forEach(object1 => {
            for (let i = object1.range[0]; i <= object1.range[1]; i++) {
                result.push(`../public/assets/${object1.fileType === 'gif' ? 'gifs' : 'images'}/${object1.prefix}${i}.${object1.fileType}`)
            }
        })
        return result;
    }
}