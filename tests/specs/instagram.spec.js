const InstagramPage = require('../pageObjects/instagram.page');
const MessagesPage = require('../pageObjects/messages.page');

describe('Testing App Instagram', () => {
//Test Case 1 - Follow Instagram "SanberCode" 
    it('Tap Search and Explore', async() => { 
        await InstagramPage.clickButtonSearch();
    }); 

    it('Search Profile', async () => {
        await InstagramPage.fillInputSearch("sanbercode");
    });

    it('Tap Search Profile SanberCode', async() => { 
        await InstagramPage.clickSearchProfile();
    });

    it('Follow Profile SanberCode', async() => { 
        await InstagramPage.clickFollowProfile();

        const FollowAccount = await InstagramPage.Following();
        await expect(FollowAccount).toContain("Following SanberCode");
    });

//Test Case 2 - Send Messages Friend on Instagram
    it('Tap Messages', async() => { 
        await MessagesPage.openMessagesPage();
    });

    it('Search Messages', async() => { 
        await MessagesPage.fillInputSearchMessages("dipamustaqim");
    });
    
    it('Tap Messages Friend', async() => { 
        await MessagesPage.clickMessagesFriend();
    });

    it('Send Messages Friend', async() => { 
        await MessagesPage.sendMessages("Aloha");
    });

    it('Sent Messages Status', async() => { 
        const StatusMessages = await MessagesPage.sentStatusMessages();
        await expect(StatusMessages).toContain("Back");
    });

    it('Bact to Messages Page', async() => { 
        await MessagesPage.clickButtonBack();
    });

});