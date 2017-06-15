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
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Set up background image
        var bgImageView: UIImageView = UIImageView(frame: self.view.bounds)
        bgImageView.image = UIImage(named: "bg1.png")
        self.view.addSubview(bgImageView)
        self.view.sendSubview(toBack: bgImageView)
        
        backButton.addTarget(self, action: #selector(backPressed), for: .touchUpInside)
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    func backPressed() {
        dismiss(animated: true, completion: nil)
    }
    
}
