class Artwork {
    constructor(_parent, item) {
        this.parent=_parent;
        this.authorname = item.authorname;
        this.workname = item.workname;
        this.technique = item.technique;
        this.bidprice = item.bidprice;
        this.status = item.status;
        this.img = item.img;
        this.id = item.id;


    }

    render() {

        let newFigure = $(` <figure class="gallery__item gallery__item--${this.id}">`);
        let newArtpic = $(` <img class="gallery__img" src="Pics/${this.img}" alt="${this.authorname}" /> `)
        $(this.parent).append(newFigure);

        $(newFigure).append(newArtpic);

        $(newFigure).on("click",()=>{
        
            darkWindowOn(this.authorname,this.workname,this.technique,this.bidprice,this.status,this.img);


        })




    }




}