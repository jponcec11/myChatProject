function login() {
    return(
        <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">contact_mail</i>
          <input id="icon_prefix" type="text" class="validate"/>
          <label for="icon_prefix">Email address</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" class="validate"/>
          <label for="icon_telephone">Telephone</label>
        </div>
      </div>
    </form>
  </div>
    )
}