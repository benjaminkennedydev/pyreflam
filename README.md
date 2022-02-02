# Getting Started 

Using homebrew, you MAY need to run the following commands (check what packages you already may have installed):

```
brew install python3
brew install python3-pip
sudo -H pip3 flask
sudo -H pip3 install pymongo

brew tap mongodb/brew
brew install mongodb/brew/mongodb-community
brew install node
brew install yarn

```


# Known Issue

The list of users should update as you add them.  When the database is first being bootstrapped, and the first user is entered, the user is successfully added to the database, but the list doesn't update.  Any subsequent users added will result in the expected behavior (the list being updated dynamically)

# Bug fixes

Find and fix the typo (Handler should be Handle)

# Feature Requests

Implement a basic search by a users handle.

Implement the deletion of a user.
