/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here
    class ContentItem {

        // properties 
        uniqueIdNumber;
        name;
        description;
        categoryGenre;

        // constructor
        constructor(uniqueIdNumber, name, description, categoryGenre) {

            this.uniqueIdNumber = uniqueIdNumber;
            this.name = name;
            this.description = description;
            this.categoryGenre = categoryGenre
        }

        //methods
        updateContentItem(uniqueIdNumber, name, description, categoryGenre) {
            if ((this.uniqueIdNumber == uniqueIdNumber) && (name != null) && (description != null) && (categoryGenre != null)) {
                this.name = name;
                this.description = description;
                this.categoryGenre = categoryGenre;
            }
        }
        //toSting Method
        toString() {
            return `<div id="content-item-${this.uniqueIdNumber}" class="content-item-wrapper">
                        <h2>${this.name}</h2>
                        <p>${this.description}</p>
                        <div>${this.categoryGenre}</div>
                    </div>`;
        }
    }
    //contentitems Array

    let contentItems = [
        new ContentItem(0, 'The force', 'Comining scientific reserch with real life examples of leaders who have conqured business friction', 'Friction'),
        new ContentItem(1, 'Becoming', 'In a life filled with meaning and accomplishment,Michelle Obama has emerged as one of the most iconic and compelling women of our era', 'Narrative'),
        new ContentItem(2, 'Maybe in another life', 'From the acclaimed author of seven husbands of Evelyn Hugo comes a breathtaking novel about a young woman whose fate hinges on the choice she makes after bumping into an old flame', 'Romance'),
        new ContentItem(3, 'Behind her Eyes', 'a psychological thriller, was written by Sarah Pinborough and published in 2017. The book has sold over 1 million copies worldwide and was adapted for a TV series', 'Thriller'),
        new ContentItem(4, 'Alice Adventures in Wonderland', ' Alice Adventures in Wonderland, which has delighted adults and children alike since it was published over a century and a half ago and today is recognized as a momentous early foray into the fantasy genre as a whole', 'Fantasy')
    ];
    // Loop through contentItems, generate HTML, and append to #content-item-list
    contentItems.forEach(function (item) {
        let contentItemHtml = item.toString();
        $("#content-item-list").append(contentItemHtml);
    });
    // Update the theme name in the HTML 
    $('#theme-name').text('Books Theme');

    // Apply CSS styles to content-item-wrapper using jQuery
    $('.content-item-wrapper').css({
        'border': '2px solid black',
        'width': '80%',
        'padding': '10px',
        'margin': '10px auto'
    });
     // Button click event for successful update
    $('#successful-update').on('click', function () {
        // Try to update a ContentItem successfully
        contentItems[0].updateContentItem(0, 'Updated Name', 'Updated Description', 'Updated Genre');
        // Update the corresponding content on the page
        refreshContent();
    });
    // Button click event for unsuccessful update
    $('#unsuccessful-update').on('click', function () {
        // Try to update a ContentItem unsuccessfully (using invalid values)
        contentItems[1].updateContentItem(1, null, null, null);
        // Update the corresponding content on the page
        refreshContent();
    });
    function refreshContent() {
        // Clear existing content
        $('#content-item-list').empty();
        // Loop through contentItems, generate HTML, and append to #content-item-list
        contentItems.forEach(function (item) {
            let contentItemHtml = item.toString();
            $("#content-item-list").append(contentItemHtml);
        });
    }

});


