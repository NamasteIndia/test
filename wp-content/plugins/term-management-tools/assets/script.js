jQuery(function(a){var b=[];a.each(tmtL10n,function(c,d){b.unshift({action:"bulk_"+c,name:d,el:a("#tmt-input-"+c)})});a(".actions select").each(function(){var c=a(this).find("option:first");a.each(b,function(e,d){c.after(a("<option>",{value:d.action,html:d.name}))})}).change(function(){var c=a(this);a.each(b,function(e,d){if(c.val()===d.action){d.el.insertAfter(c).css("display","inline").find(":input").focus()}else{d.el.css("display","none")}})})});