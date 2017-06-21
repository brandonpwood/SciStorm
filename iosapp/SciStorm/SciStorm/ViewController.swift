//
//  ViewController.swift
//  SciStorm
//
//  Created by Dan Shafman on 6/13/17.
//  Copyright © 2017 Dan Shafman. All rights reserved.
//

import UIKit
import Google

class ViewController: UIViewController, GIDSignInUIDelegate {
    
    @IBOutlet weak var requestBetaButton: UIButton!
    @IBOutlet weak var titleLabel: UILabel!
    
    var signInButton: GIDSignInButton!
    let defaults: UserDefaults = UserDefaults.standard
    
    override func viewDidLoad() {
        super.viewDidLoad()
        GIDSignIn.sharedInstance().uiDelegate = self
        
        // Set up background image
        var bgImageView: UIImageView = UIImageView(frame: self.view.bounds)
        bgImageView.image = UIImage(named: "bg1.png")
        self.view.addSubview(bgImageView)
        self.view.sendSubview(toBack: bgImageView)
        
        // Set up Google sign-in button
        signInButton = GIDSignInButton(frame: CGRect(x: self.view.frame.width / 2 - 125, y: 350, width: 250, height: 50))
        signInButton.colorScheme = .dark
        signInButton.style = .wide
        self.view.addSubview(signInButton)
        
        // Set up Request Beta button
        let attrButton = createBoldRangeString(text: "Request a Beta Trial", size: 20, start: 10, len: 4, color: UIColor.white)
        requestBetaButton.setAttributedTitle(attrButton, for: .normal)
        requestBetaButton.layer.cornerRadius = 2
        requestBetaButton.addTarget(self, action: #selector(betaRequested), for: .touchUpInside)
        
        // Set up SciStorm label
        let attrTitle = createBoldRangeString(text: "SciStorm", size: 64, start: 0, len: 3, color: UIColor.white)
        titleLabel.attributedText = attrTitle
        
//        print("\nSigned in as \(defaults.string(forKey: "fullName"))\n")
        //GIDSignIn.sharedInstance().signInSilently()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

    func createBoldRangeString(text: String, size: Int, start: Int, len: Int, color: UIColor) -> NSMutableAttributedString {
        let attr = NSMutableAttributedString(string: text)
        attr.addAttribute(NSFontAttributeName, value: UIFont.boldSystemFont(ofSize: CGFloat(size)), range: NSMakeRange(start, len))
        attr.addAttribute(NSForegroundColorAttributeName, value: color, range: NSMakeRange(0, text.characters.count))

        return attr
    }
    
    func betaRequested() {
        let requestBetaController = self.storyboard?.instantiateViewController(withIdentifier: "RequestBetaController") as! RequestBetaViewController
        self.present(requestBetaController, animated: true) {
            
        }
    }

}

