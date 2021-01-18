const appCreate = () => {
  createArtpics(artistArr);
};

const createArtpics = (arr) => {
  arr.map((item) => {
    let artpic = new Artwork(".gallery", item);
    artpic.render();
  });

  // let videoButton=`<figure  class="video-click gallery__item gallery__item">
  // <img id="video" class="gallery__img" src="Pics/Pic8.jpg" alt="" />
  // </figure>`;
  // $(videoButton).on("click","#video",()=>{
  //     alert()
  //     $(".gallery2").slideToggle("slow")
  // })

  // $(".gallery").append(videoButton)

  $(".gallery")
    .append(`<figure  class="video-click gallery__item gallery__item">
 <img id="video" class="gallery__img" src="Pics/horse.gif" alt="" />
  </figure>`);
};
