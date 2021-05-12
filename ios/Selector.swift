//
//  Selector.swift
//  PanoramaAgroalimentario2020
//
//  Created by Rafael Canchola on 11/05/21.
//

import Foundation

class Selector: UIViewController{
    var producto:String!

    @IBAction func buttonManzPressed(_ sender: UIButton){
    producto = "manzana"
        
    }
    
    @IBAction func buttonHuevPressed(_ sender: UIButton){
      producto = "piña"
    }
    
    @IBAction func buttonPiñaPressed(_ sender: UIButton){
      producto = "piña"
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
      let destination = segue.destination
                                  as! ARObjView
      destination.productoObj = producto
  }
}
