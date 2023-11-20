// add a table to the page 
let $table = $('<table/>');
// add to the body of document
$('body').append($table);

// add a title for the table before table 

$('table').before('<h1/>');
$('h1').text('Sorting Characters');

// add a thead and tbody on the table 
$('table').append('<thead/>');
$('table').append('<tbody/>');
$('table').addClass('sortable');

//create the heading row
let $headingRow = $('<tr/>');
// add this row to thead
$('thead').append($headingRow);
$headingRow.append($('<th/>').html('<a data-sort="name">First Name</a>'));
$headingRow.append($('<th/>').html('<a data-sort="name">Last Name</a>'));
$headingRow.append($('<th/>').html('<a data-sort="name">Gender</a>'));
$headingRow.append($('<th/>').html('<a data-sort="name">Role</a>'));
$headingRow.append($('<th/>').html('<a data-sort="name">Age</a>'));
$headingRow.append($('<th/>').html('<a data-sort="date">Date Of Birth</a>'));

// get content of json file 

$.ajax({
    type: "get",
    url: "exm.json",
    error: function(){
        $('.sortable').empty().append('<h1> Content can not be retrieved</h1>');
    },
    success: function(response){
        //loop through response received
        $.each(response, function(index, value){
            // create row
            let $row = $('<tr/>').addClass('row');
            // add td to the row
            $row.append($('<td></td>').text(value.firstName));
            $row.append($('<td></td>').text(value.lastName));
            $row.append($('<td></td>').text(value.gender));
            $row.append($('<td></td>').text(value.role));
            $row.append($('<td></td>').text(value.age));
            $row.append($('<td></td>').text(value.date-of-birth));

            // add rows to table 
            $('tbody').append($row);
        
        //Start Sorting
        var compare = {
            name: function(a,b){
                a = a.replace(/^the /i, '');
                b =  b.replace(/^the /i, '');
        
                if (a < b){
                    return -1;
                } else {
                    return a>b ? 1 : 0;
                }
            },
            duration: function(a,b){
                a = a.split('-');
                b = b.split('-');
        
                return a - b;
        
            },
            date: function(a,b){
                a = new Date(a);
                b = new Date(b);
        
                return a - b;
            }
        };
        
        $('.sortable').each(function(){
            var $table = $(this);
            var $tbody = $table.find('tbody');
            var $controls = $table.find('th a');
            var rows = $tbody.find('tr').toArray();
            //copy/clown the row that is existing row
            const deepCopy =[...rows];
        
            $controls.on('click',function(){
                var $header = $(this);
                var order = $header.data('sort');
                var column;
              
                //If selected item has ascending or descending class, reverse contents
                if ($header.is('.ascending')){
                    $header.removeClass(".ascending no-sort");
                    $headingRow.addClass(".descending");
                   
                    $tbody.append(rows.reverse());
                    
        
                }else if($header.is('.decending')){
                    $header.removeClass('descending ascending ');
                    $header.addClass('no-sort');
                    $tbody.append(deepCopy);

                } else {
                    $header.addClass('ascending');
                    $header.removeClass('no-sort');
                    //Remove asc or desc from all other headers
                    $header.siblings().removeClass('ascending descending no-sort');
                    
                    if (compare.hasOwnProperty(order)){
                        column = $controls.index(this);
                     rows.sort(function(a,b){
                            a = $(a).find('td').eq(column).text();
                            b = $(b).find('td').eq(column).text();
                            console.log('a: ',a,'   b: ', b)
                            return  compare[order](a,b);
                            
                            
                        });
                        $tbody.append(rows);
                    }
                }
            })
        })
    });
    }
})
