
Ember.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("    <section id=\"martenblog\">\n      <header id=\"header\">\n        <img src=\"images/gretel.jpg\" />\n        <span id=\"title\">Martenblog</span>\n      </header>\n\n      <section id=\"hlavni\">\n        <section id=\"rutabaga\">\n          <div id=\"pagination\">\n            <span class=\"pagelink\">1</span>\n            <span class=\"pagelink\">2</span>\n            <span class=\"pagelink\">3</span>\n            <span class=\"pagelink\">4</span>\n            ...\n            <span class=\"pagelink\">next</span>\n          </div>\n\n          <div id=\"expanded-count\">\n            Expanded: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "expanded", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "inflection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n          </div>\n\n          <section id=\"entries\">\n          </section>\n        </section>\n\n        <section id=\"sidebar\">\n          <div id=\"pointless-photo\">\n            <img src=\"images/mustelid.jpg\" />\n          </div>\n          <div id=\"calendar\">\n            A calendar goes here\n          </div>\n          <section id=\"topics\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n          </section>\n        </section>\n      </section>\n\n      <br class=\"clear\" />\n\n      <footer id=\"footer\">\n        <span id=\"oort-cloud\">\n          (c) 2013 Bob Shelton\n        </span>\n      </footer>\n    </section>\n");
  return buffer;
  
});

Ember.TEMPLATES['topics'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  <div>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "topic", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n");
  return buffer;
  }

  data.buffer.push("<h2>topics</h2>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});


