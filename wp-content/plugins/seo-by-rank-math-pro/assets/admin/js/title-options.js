(()=>{var e;(e=jQuery)((function(){var t=function(){setTimeout((function(){var t=e('#custom_image_overlays_repeat input[type="text"]');1===t.length?t.prop("required",!1):t.prop("required",!0)}),55)},r=function(){setTimeout((function(){var t=e(".default-overlay-field"),r=["","play","gif"],a={};e('#custom_image_overlays_repeat input[type="text"]').each((function(t,r){var i=e(r).val(),n=function(e){e=(e=e.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var t="àáäâèéëêìíïîòóöôùúüûñçěščřžýúůďťň·/_,:;",r=0;r<39;r++)e=e.replace(new RegExp(t.charAt(r),"g"),"aaaaeeeeiiiioooouuuuncescrzyuudtn------".charAt(r));return e.replace(".","-").replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/\//g,"")}(i);a[n]=i})),t.each((function(t,i){var n=e(i).find(".cmb2-radio-list"),o=n.children("li"),c=o.first(),u=n.find("input:checked").val();o.each((function(t,a){var i=e(a),n=i.find("input").val();if(-1!==r.indexOf(n))return!0;i.remove()})),e.each(a,(function(e,t){if(!e||!t)return!0;var r=c.find("input").attr("id")+"-synced-item-"+e,a=c.clone();a.find("input").attr("id",r).val(e).prop("checked",e===u).siblings("label").text(t).attr("for",r),n.append(a)})),0===n.find("input:checked").length&&n.find("input").first().prop("checked",!0)}))}),55)};e("#custom_image_overlays_repeat").on("click",".cmb-remove-group-row-button, button.cmb-add-group-row",t),t(),e("#custom_image_overlays_repeat").on("change",'input[type="text"]',r),e("#custom_image_overlays_repeat").on("click",".cmb-remove-group-row-button",r),r()}))})();