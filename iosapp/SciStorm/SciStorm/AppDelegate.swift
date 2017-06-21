//
//  AppDelegate.swift
//  SciStorm
//
//  Created by Dan Shafman on 6/13/17.
//  Copyright © 2017 Dan Shafman. All rights reserved.
//

import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, GIDSignInDelegate {
    
//     User defaults
    let defaults: UserDefaults = UserDefaults.standard
    let storyboard = UIStoryboard(name: "Main", bundle: nil)
    var window: UIWindow?
    
//    Method to handle sign-in from Google
    public func sign(_ signIn: GIDSignIn!, didSignInFor user: GIDGoogleUser!, withError error: Error!) {
        
        if (error == nil) {
            let userId = user.userID
            let idToken = user.authentication.idToken
            let fullName = user.profile.name
            let givenName = user.profile.givenName
            let familyName = user.profile.familyName
            let email = user.profile.email
            
            // Sets the app defaults for the next time it is started
            defaults.set(userId, forKey: "userId")
            defaults.set(idToken, forKey: "idToken")
            defaults.set(fullName, forKey: "fullName")
            defaults.set(givenName, forKey: "givenName")
            defaults.set(familyName, forKey: "familyName")
            defaults.set(email, forKey: "email")
            
            print("\n\nSigned in as \(defaults.string(forKey: "fullName"))")

            // Transitions to feed when signed in
            let initialViewController = storyboard.instantiateViewController(withIdentifier: "TabController")
            
            self.window?.rootViewController = initialViewController
            self.window?.makeKeyAndVisible()
        } else {
            print("\(error.localizedDescription)")
        }
    }
    
//    Method to handle sign-out from Google
    func sign(_ signIn: GIDSignIn!, didDisconnectWith user:GIDGoogleUser!,
              withError error: Error!) {
        print("Signed out")
    }
    
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
        // Skips login page if already signed in
        if defaults.string(forKey: "fullName") != nil {
            print("\n\nInitial sign in as \(defaults.string(forKey: "fullName"))")
//            self.window?.rootViewController!.performSegue(withIdentifier: "signed_in", sender: nil)
            let initialViewController = storyboard.instantiateViewController(withIdentifier: "TabController")
            
            self.window?.rootViewController = initialViewController
            self.window?.makeKeyAndVisible()
        }
        
        var configureError: NSError?
        GGLContext.sharedInstance().configureWithError(&configureError)
        assert(configureError == nil, "Error configuring Google services: \(configureError)")
        
        GIDSignIn.sharedInstance().delegate = self
        // Override point for customization after application launch.
        return true
    }
    
    func application(_ app: UIApplication, open url: URL, options: [UIApplicationOpenURLOptionsKey : Any] = [:]) -> Bool {
        print("kek")
        return GIDSignIn.sharedInstance().handle(url, sourceApplication: options[UIApplicationOpenURLOptionsKey.sourceApplication] as? String, annotation: options[UIApplicationOpenURLOptionsKey.annotation])
    }
    
    func application(_ app: UIApplication, open url: URL, sourceApplication: String?, annotation: AnyObject?) -> Bool {
        print("lel")
        var options: [String: AnyObject] = [UIApplicationOpenURLOptionsKey.sourceApplication.rawValue: sourceApplication as AnyObject,
                                            UIApplicationOpenURLOptionsKey.annotation.rawValue: annotation!]
        return GIDSignIn.sharedInstance().handle(url,
                                                    sourceApplication: sourceApplication,
                                                    annotation: annotation)
    }
    
    func applicationWillResignActive(_ application: UIApplication) {
        // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
        // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
    }

    func applicationDidEnterBackground(_ application: UIApplication) {
        // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
        // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    }

    func applicationWillEnterForeground(_ application: UIApplication) {
        // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
    }

    func applicationDidBecomeActive(_ application: UIApplication) {
        // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
    }

    func applicationWillTerminate(_ application: UIApplication) {
        // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
    }


}

