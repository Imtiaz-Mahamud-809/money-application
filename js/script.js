// =======================================================
let addMoneyShow = document.getElementById("addMoneyShow");
let sendMoneyShow = document.getElementById("sendMoneyShow");
// =======================================================
let addMoneyHide = document.getElementById("addMoneyHide");
let sendMoneyHide = document.getElementById("sendMoneyHide");
// =======================================================
let numberInput = document.getElementById("numberInput");
let addAmountInput = document.getElementById("addAmountInput");
let passwordInput = document.getElementById("passwordInput");
// =======================================================
let invalidNumber = document.getElementById("invalidNumber");
let pinNotMatch = document.getElementById("pinNotMatch");
let amountAlart = document.getElementById("amountAlart");
let insufficientBalance = document.getElementById("insufficientBalance");
let addSuccessfully = document.getElementById("addSuccessfully");
let sendSuccessfully = document.getElementById("sendSuccessfully");
// =======================================================
let totalAmount = document.getElementById("totalAmount");

// =======================================================
addMoneyShow.addEventListener("click", () => {
  addMoneyHide.removeAttribute("hidden");
  sendMoneyHide.setAttribute("hidden", true);
  addMoneyShow.style.backgroundColor = "#134e4a";
  sendMoneyShow.style.backgroundColor = "";
});
sendMoneyShow.addEventListener("click", () => {
  sendMoneyHide.removeAttribute("hidden");
  addMoneyHide.setAttribute("hidden", true);
  sendMoneyShow.style.backgroundColor = "#134e4a";
  addMoneyShow.style.backgroundColor = "";
});

// =======================================================
addMoneyHide.addEventListener("click", () => {
  let mobile = numberInput.value.trim();
  let password = passwordInput.value.trim();
  let amount = addAmountInput.value;
  let total = parseInt(totalAmount.innerHTML);
  let addAmountInputValue = parseInt(addAmountInput.value);

  if (mobile.length == 11 && mobile.startsWith("01") && !isNaN(mobile)) {
    if (amount != "" && !isNaN(amount)) {
      if (password == "1234") {
        addSuccessfully.removeAttribute("hidden");
        invalidNumber.setAttribute("hidden", true);
        pinNotMatch.setAttribute("hidden", true);
        amountAlart.setAttribute("hidden", true);
        sendSuccessfully.setAttribute("hidden", true);
        numberInput.value = "";
        addAmountInput.value = "";
        passwordInput.value = "";
        setTimeout(() => {
          addSuccessfully.setAttribute("hidden", true);
        }, 3000);

        let finalAmount = total + addAmountInputValue;
        totalAmount.innerHTML = finalAmount;
      } else {
        pinNotMatch.removeAttribute("hidden");
        invalidNumber.setAttribute("hidden", true);
        addSuccessfully.setAttribute("hidden", true);
        amountAlart.setAttribute("hidden", true);
        sendSuccessfully.setAttribute("hidden", true);
      }
    } else {
      amountAlart.removeAttribute("hidden");
      pinNotMatch.setAttribute("hidden", true);
      invalidNumber.setAttribute("hidden", true);
      addSuccessfully.setAttribute("hidden", true);
      sendSuccessfully.setAttribute("hidden", true);
    }
  } else {
    invalidNumber.removeAttribute("hidden");
    addSuccessfully.setAttribute("hidden", true);
    pinNotMatch.setAttribute("hidden", true);
    amountAlart.setAttribute("hidden", true);
    sendSuccessfully.setAttribute("hidden", true);
  }
});
// =======================================================
sendMoneyHide.addEventListener("click", () => {
  let mobile = numberInput.value.trim();
  let password = passwordInput.value.trim();
  let amount = addAmountInput.value;
  let total = parseInt(totalAmount.innerHTML);
  let addAmountInputValue = parseInt(addAmountInput.value);
  let finalAmount = total - addAmountInputValue;

  if (mobile.length == 11 && mobile.startsWith("01") && !isNaN(mobile)) {
    if (amount != "" && !isNaN(amount)) {
      if (password == "1234") {
        if (totalAmount.innerHTML >= 0 && finalAmount >= 0 && amount > 0) {
          sendSuccessfully.removeAttribute("hidden");
          invalidNumber.setAttribute("hidden", true);
          pinNotMatch.setAttribute("hidden", true);
          amountAlart.setAttribute("hidden", true);
          insufficientBalance.setAttribute("hidden", true);
          addSuccessfully.setAttribute("hidden", true);
          numberInput.value = "";
          addAmountInput.value = "";
          passwordInput.value = "";
          setTimeout(() => {
            sendSuccessfully.setAttribute("hidden", true);
          }, 3000);
          totalAmount.innerHTML = finalAmount;
        } 
        else {
          insufficientBalance.removeAttribute("hidden");
          invalidNumber.setAttribute("hidden", true);
          addSuccessfully.setAttribute("hidden", true);
          amountAlart.setAttribute("hidden", true);
          pinNotMatch.setAttribute("hidden", true);
          sendSuccessfully.setAttribute("hidden", true);
        }
      } 
      else {
        pinNotMatch.removeAttribute("hidden");
        invalidNumber.setAttribute("hidden", true);
        addSuccessfully.setAttribute("hidden", true);
        amountAlart.setAttribute("hidden", true);
        insufficientBalance.setAttribute("hidden", true);
        sendSuccessfully.setAttribute("hidden", true);
      }
    } 
    else {
      amountAlart.removeAttribute("hidden");
      pinNotMatch.setAttribute("hidden", true);
      insufficientBalance.setAttribute("hidden", true);
      invalidNumber.setAttribute("hidden", true);
      addSuccessfully.setAttribute("hidden", true);
      sendSuccessfully.setAttribute("hidden", true);
    }
  } 
  else {
    invalidNumber.removeAttribute("hidden");
    addSuccessfully.setAttribute("hidden", true);
    pinNotMatch.setAttribute("hidden", true);
    amountAlart.setAttribute("hidden", true);
    insufficientBalance.setAttribute("hidden", true);
    sendSuccessfully.setAttribute("hidden", true);
  }
});
