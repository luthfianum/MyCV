const ratePassword = (password) => {
	let passwordRater = $("#passwordrater")
    let rate = 0;
    rate += password.match(/[a-z]/g) ? 1 : 0
    rate += password.match(/[A-Z]/g) ? 1 : 0
    rate += password.match(/[0-9]/g) ? 1 : 0
    rate += password.length > 6 ? 1 : 0
    if(rate >= 4){
      passwordRater.html(`<span class="text-success font-weight-700">Strong</span>`)
    }else if(rate >= 2){
      passwordRater.html(`<span class="text-warning font-weight-700">Medium</span>`)
    }else{
      passwordRater.html(`<span class="text-danger font-weight-700">Weak</span>`)
  	}
}
const validateValueRegister = () => {
	let valuePrivacyPolicy = $("#customCheckRegister").is(':checked')
    let valuePassword = $("#password").val()
    let valueEmail = $("#email").val()
    let valueUsername = $("#username").val()
    if(valuePrivacyPolicy && (valuePassword != "") && (valueEmail != "") && (valueUsername != "")){
      $("#submitButton").html(`<button type="submit" class="btn btn-primary mt-4">Create account</button>`)
    }else{
      $("#submitButton").html(`<button type="submit" class="btn btn-primary mt-4" disabled>Create account</button>`)
    }
}