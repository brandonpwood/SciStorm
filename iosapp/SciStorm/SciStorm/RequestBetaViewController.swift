//
//  RequestBetaViewController.swift
//  SciStorm
//
//  Created by Dan Shafman on 6/14/17.
//  Copyright © 2017 Dan Shafman. All rights reserved.
//

import Foundation
import UIKit

class RequestBetaViewController: UIViewController {
    
    @IBOutlet weak var backButton: UIButton!
    @IBOutlet weak var submitButton: UIButton!
    @IBOutlet weak var termsAndServicesButton: UIButton!
    @IBOutlet weak var termsContainer: UIView!
    @IBOutlet weak var closeTermsButton: UIButton!
    @IBOutlet weak var requestConfirm: UIView!
    @IBOutlet weak var backToLogin: UIButton!
    
    var termsIsHidden = true
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Set up terms window
        termsContainer.frame.origin.x = (self.view.frame.width - termsContainer.frame.width) / 2
        termsContainer.frame.origin.y = 1000
        termsContainer.frame.size.height = 600
        termsContainer.layer.cornerRadius = 3
        
        // Set up done button
        closeTermsButton.frame.origin.x = 57
        closeTermsButton.frame.origin.y = 1000
        closeTermsButton.addTarget(self, action: #selector(donePressed), for: .touchUpInside)
        
        // Set up background image
        let bgImageView: UIImageView = UIImageView(frame: self.view.bounds)
        bgImageView.image = UIImage(named: "bg1.png")
        self.view.addSubview(bgImageView)
        self.view.sendSubview(toBack: bgImageView)
        
        // Set up submit button
        submitButton.layer.cornerRadius = 2
        submitButton.addTarget(self, action: #selector(submitPressed), for: .touchUpInside)
        
        // Set up back button
        backButton.addTarget(self, action: #selector(backPressed), for: .touchUpInside)
        
        // Set up terms/services button
        let attr = NSMutableAttributedString(string: "Terms and Services")
        attr.addAttribute(NSUnderlineStyleAttributeName, value: 1, range: NSMakeRange(0, 18))
        attr.addAttribute(NSForegroundColorAttributeName, value: UIColor.white, range: NSMakeRange(0, 18))
        termsAndServicesButton.setAttributedTitle(attr, for: .normal)
        termsAndServicesButton.addTarget(self, action: #selector(termsPressed), for: .touchUpInside)

        // Set up "back to login" prompt
        let backText = NSMutableAttributedString(string: "Back to Login")
        backText.addAttribute(NSUnderlineStyleAttributeName, value: 1, range: NSMakeRange(0, 13))
        backText.addAttribute(NSForegroundColorAttributeName, value: UIColor.white, range: NSMakeRange(0, 13))
        backToLogin.setAttributedTitle(backText, for: .normal)
        backToLogin.addTarget(self, action: #selector(backPressed), for: .touchUpInside)
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    func backPressed() {
        dismiss(animated: true, completion: nil)
    }
    
    func termsPressed() {
        UIView.animate(withDuration: 0.25, delay: 0, options: UIViewAnimationOptions.curveEaseOut, animations: {
            if self.termsIsHidden {
                self.termsContainer.frame.origin.y = 70
                self.closeTermsButton.frame.origin.y = 78
            } else {
                self.termsContainer.frame.origin.y = 1000
                self.closeTermsButton.frame.origin.y = 1000
            }
            self.termsIsHidden = !self.termsIsHidden
        }, completion: nil)
    }
    
    func submitPressed() {
        UIView.animate(withDuration: 0.25, delay: 0, options: UIViewAnimationOptions.curveEaseOut, animations: {
            self.requestConfirm.alpha = 0.75
        }, completion: nil)
    }
    
    func donePressed() {
        UIView.animate(withDuration: 0.25, delay: 0, options: UIViewAnimationOptions.curveEaseOut, animations: {
            self.termsContainer.frame.origin.y = 1000
            self.closeTermsButton.frame.origin.y = 1000
            self.termsIsHidden = true
        }, completion: nil)
    }
    
}
