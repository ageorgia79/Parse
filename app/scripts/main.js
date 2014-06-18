'use strict';

Parse.initialize("FU763QF0GcO4c8CWgyErSTBwEfYmmvtJxgvYLLjs", "qyte7Vfkkc3NtqL767YsGaXO7FjGk4KNUWx5RP7E");

//MODEL//////////////////////////////////////////////////////////////////////////////////////////////////////
var Gallery = Parse.Object.extend({
  className: 'Gallery'
});
///END MODEL/////////////////////////////////////////////////////////////////////////////////////////////////


var gallery = new Gallery();

$('.upload').click(function(){
  gallery.set('url', $('.uploader').val());//WHY DOES THIS ONLY WORK IN GLOBAL SCOPE/////////////////////////


  gallery.save();
})


//COLLECTION////////////////////////////////////////////////////////////////////////////////////////////////

var GalleryCollection = Parse.Collection.extend({

  model: Gallery

});

var collection = new GalleryCollection();
////END COLLECTION//////////////////////////////////////////////////////////////////////////////////////////



////VIEW////////////////////////////////////////////////////////////////////////////////////////////////////

var url;

var GalleryView = Parse.View.extend({

  pictureTemplate: _.template($('.picture-template').text()),

  events: {

    "click .upload": "showUpload"
  },

  initialize: function(){
    
    $('.container').append(this.model);
      this.render();
  }, 

  //this.model.on('add', this.render)
  //this.model.trigger('add')

  render: function(){
    
    var renderedTemplate = this.pictureTemplate(this.model)
    this.$el.html(renderedTemplate);
    return this;
  
  },

  showUpload: function(){
    
      gallery.set('url', $('.uploader').val());
      gallery.save();
    
  },


});

  var view = new GalleryView();
  collection.fetch({add:true});
////END VIEW//////////////////////////////////////////////////////////////////////////////////////////////////////////////
    




    
    


