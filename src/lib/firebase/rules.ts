// Firebase Security Rules

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }
    
    function isAdmin() {
      return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }

    // Projects Collection
    match /projects/{projectId} {
      allow read: if true;  // Anyone can read projects
      allow create, update, delete: if isAuthenticated() && isAdmin();  // Only admin can modify
    }

    // Users Collection
    match /users/{userId} {
      allow read: if isAuthenticated();
      allow write: if isOwner(userId);
    }

    // Finance Applications Collection
    match /finance_applications/{applicationId} {
      allow read: if isAuthenticated() && (isOwner(resource.data.userId) || isAdmin());
      allow create: if isAuthenticated();
      allow update: if isAdmin();
    }

    // Package Subscriptions Collection
    match /package_subscriptions/{subscriptionId} {
      allow read: if isAuthenticated() && (isOwner(resource.data.userId) || isAdmin());
      allow create: if isAuthenticated();
      allow update: if isAdmin();
    }

    // Contact Messages Collection
    match /contact_messages/{messageId} {
      allow read: if isAdmin();
      allow create: if true;
      allow update: if isAdmin();
    }
  }
}

service firebase.storage {
  match /b/{bucket}/o {
    match /projects/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}