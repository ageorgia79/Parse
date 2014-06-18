'use strict';

Parse.initialize("FU763QF0GcO4c8CWgyErSTBwEfYmmvtJxgvYLLjs", "qyte7Vfkkc3NtqL767YsGaXO7FjGk4KNUWx5RP7E");

//MODEL///////
var Gallery = Parse.Object.extend({
  className: 'Gallery'
});
///END MODEL//






//COLLECTION//

var GalleryCollection = Parse.Collection.extend({

  model: Gallery

});

var collection = new GalleryCollection();
//ENDCOLLECTION/



////VIEW//////


var GalleryView = Parse.View.extend({

  className: 'cool',

  pictureTemplate: _.template($('.picture-template').text()),

  events: {

    "click .upload": "showUpload"

  },

  initialize: function(){
    //this.model.on('add', this.render);
    $('.container').append(this.el);

      this.render();
  }, 

  //this.model.trigger('add')

  render: function(){
    
    var renderedTemplate = this.pictureTemplate("");

    this.$el.html(renderedTemplate);

  },

  showUpload: function(){
    console.log('hi')
    
      var gallery = new Gallery();

    // var gallery = new Gallery();
      var url = $('.uploader').val();
      gallery.set('url', url);

      gallery.save();
    
  }

});

  var view = new GalleryView();

  collection.fetch({add:true});
////END VIEW/////
    




    
    


