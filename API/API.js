  var info = []

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      info = data
      data.forEach(item => {
        $('.flex-container').append(
          `
          <div class="panel">
            <div class="button panel-heading" style="cursor: pointer;">
              Name : ${item.name}
              <div class="pull-right">
                <a href="#" data-perform="panel-collapse"><i class="ti-plus"></i></a>
                <a href="#" data-perform="panel-dismiss"></a>
              </div>
            </div>
            <div class="panel-wrapper collapse" aria-expanded="true">
              <div class="panel-body">
                Username : ${item.username}
              </div>
              <div class="panel-body">
                Email : ${item.email}
              </div>
              <div class="panel-body">
                Phone Number : ${item.phone}
              </div>
              <div class="panel-body">
                Website : ${item.website}
              </div>
              <div class="panel-body">
                Address : ${item.street}
              </div>
            </div>
          </div>

          `
        )
      })
      console.log(info)

      $('.panel-heading').on('click', function () {
        $(this).next('.panel-wrapper').slideToggle('slow')
        alert('You have clicked :)')
      })
    })