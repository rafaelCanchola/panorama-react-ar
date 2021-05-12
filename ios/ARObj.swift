//
//  ARObj.swift
//  PanoramaAgroalimentario2020
//
//  Created by Rafael Canchola on 09/05/21.
//

import Foundation
import UIKit

@objc(ARObj)
class ARObj: NSObject{
  @objc static func requiresMainQueueSetup() -> Bool {
          return true
      }
  @objc
    func printHelloWorld() {
      print("Hello World")
    }
  
  @objc
    func navigateTo(_ destination: NSString) -> Void {
      let modelVC: UIViewController;
      switch destination {
      case "AR":
        modelVC = ARObjView()
      default:
        return;
      }
      DispatchQueue.main.async {
        let navController = UINavigationController(rootViewController: modelVC)
        navController.modalPresentationStyle = .fullScreen
        navController.present(navController, animated: true, completion: nil)
      }
    }
}
