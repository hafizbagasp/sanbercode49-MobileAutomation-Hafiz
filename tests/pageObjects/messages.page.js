const waitHelper = require('../../helper/waitHelper');

class MessagesPage { 
    get buttonHome(){ 
        return $('xpath://android.widget.FrameLayout[@content-desc="Home"]/android.view.ViewGroup/android.widget.FrameLayout')
    }
    
    get buttonMessages(){
        return $('xpath://android.widget.Button[@content-desc="No unread messages"]')
    }

    get inputsearchMessages(){
        return $('xpath://android.widget.EditText')
    }

    get messagesFriend(){
        return $('xpath:(//android.widget.LinearLayout)[6]')
    }

    get inputText(){
        return $('xpath://android.widget.EditText')
    }

    get buttonSend(){
        return $('xpath:(//android.widget.Button)[2]')
    }

    get buttonBack(){
        return $('xpath://android.widget.ImageView[@content-desc="Back"]')
    }

    get getTextSentMessages(){
        return $('xpath://android.widget.ImageView[@content-desc="Back"]')
    }
 
    async clickButtonHome(){ 
        //await this.buttonSearch.click();
        await waitHelper.waitAndClick(this.buttonHome);
    } 

    async openMessagesPage(){
        await waitHelper.waitAndClick(this.buttonHome); 
        await this.buttonMessages.click();
    }

    async fillInputSearchMessages(string){ 
        await this.inputsearchMessages.click();
        await this.inputsearchMessages.setValue(string);
    }

    async clickMessagesFriend(){ 
        await this.messagesFriend.click();
    }

    async sendMessages(string){ 
        await this.inputText.click();
        await this.inputText.setValue(string);
        await this.buttonSend.click();
    }

    async sentStatusMessages(string){
        return this.getTextSentMessages.getAttribute('content-desc');
    }

    async clickButtonBack(){ 
        await this.buttonBack.click();
        await this.buttonBack.click();
    }

} 
 
module.exports = new MessagesPage()