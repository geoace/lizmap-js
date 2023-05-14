lizMap.events.on({
    'lizmappopupdisplayed':function(evt){
        const lizmapPopupSingleFeature = document.querySelector('.lizmapPopupSingleFeature');
        const featureEditButton = lizmapPopupSingleFeature.querySelector('.feature-edit');
        featureEditButton.click();
    }
});