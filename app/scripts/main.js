'use strict';

Parse.initialize("FU763QF0GcO4c8CWgyErSTBwEfYmmvtJxgvYLLjs", "qyte7Vfkkc3NtqL767YsGaXO7FjGk4KNUWx5RP7E");

//MODEL///////
var Post = Parse.Object.extend({
  className: 'Post'
});
///END MODEL////////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//COLLECTION//

var PostCollection = Parse.Collection.extend({

  model: Post,

});

var collection = new PostCollection();

//ENDCOLLECTION/////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

////POSTVIEW//////


var PostView = Parse.View.extend({

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
    
    var renderedTemplate = this.pictureTemplate();

    this.$el.html(renderedTemplate);

  },

  showUpload: function(){
    console.log('button works')
    
      var post = new Parse.Object('Post');
      var url = $('.uploader').val();
      post.set('url', url);

      post.save().done(function(){
        var detail = new DetailView({model: post});
        $('.imagecontainer').append(detail);


      })
    
  }

});

  var view = new PostView();

////END POSTVIEW////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//BEGIN DETAIL VIEW//

var DetailView = Parse.View.extend({

  className: 'detail',

  detailTemplate: _.template($('.detail-template').text()),

  events: {

    "click .comment": "showComment"
  },

  initialize: function(){
    //this.model.on('change');
    $('.imagecontainer').append(this.el);
    this.render();

    //this.model.on('change', this.render.bind(this) );

  },

  render: function(){
    var renderedTemplate = this.detailTemplate(this.model.attributes);
    this.$el.html(renderedTemplate);
    return this;
  },

  showComment: function(){
    console.log('firing')

    var post = new Parse.Object('Post');
    var comment = $('.comments').val();
    post.set('comment', comment);

    var that = this;

    post.save().done(function(){
      var detail = new DetailView({model: that.model});
      $('.commentbox').append(detail);
    })

  }
});


////////////////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    
  collection.on('add', function(model){
    
    
  });
  collection.fetch({add:true}).done(function(){
    collection.each(function(photoModel) {
      new DetailView({model: photoModel})
    });
  })



