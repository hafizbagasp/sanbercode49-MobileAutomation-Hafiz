const waitHelper = require('../../helper/waitHelper');

class InstagramPage { 
    get buttonSearch(){ 
        return $('xpath://android.widget.FrameLayout[@content-desc="Search and explore"]')
    } 

    get inputSearch(){
        return $('xpath://android.widget.EditText')
    }

    get searchProfile(){
        return $('xpath:(//android.widget.LinearLayout)[6]')
    }

    get followProfile(){
        return $('xpath://android.widget.Button[@content-desc="Follow SanberCode"]')
    }

    get getTextFollowing(){
        return $('//android.widget.Button[@content-desc="Following SanberCode"]')
    }
 
    async clickButtonSearch(){ 
        //await this.buttonSearch.click();
        await waitHelper.waitAndClick(this.buttonSearch);
    } 

    async fillInputSearch(string){ 
        await this.inputSearch.click();
        await this.inputSearch.setValue(string);
    } 

    async clickSearchProfile(){ 
        await this.searchProfile.click();
    } 

    async clickFollowProfile(){ 
        await this.followProfile.click();
    }

    async Following(){
        return this.getTextFollowing.getAttribute('content-desc');
    }
    
} 
 
module.exports = new InstagramPage()