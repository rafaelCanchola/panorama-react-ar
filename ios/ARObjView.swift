//
//  ARObj.swift
//  PanoramaAgroalimentario2020
//
//  Created by Rafael Canchola on 08/05/21.
//

import Foundation
import UIKit
import SceneKit
import ARKit

class ARObjView: UIViewController, ARSCNViewDelegate {
  
  @IBOutlet var sceneView: ARSCNView!
  
  var productoObj:String = "ship"
  
  func getPlist(withName name: String) -> String
  {
    //leer el archivo plist
    let documentsPath = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first
    let path = documentsPath!.appendingPathComponent(name)
    let nsDictionary = NSDictionary(contentsOfFile: path.path)!
    return nsDictionary .object(forKey: "objetoSelector") as! String
  }
  
  override func viewDidLoad() {
      super.viewDidLoad()
      
      // Set the view's delegate
      sceneView.delegate = self
      
      // Show statistics such as fps and timing information
      sceneView.showsStatistics = false
    
      // Create a new scene
    var scene:SCNScene;
    switch getPlist(withName: "ARSelector.plist") {
    case "Aguacate"://checked
      scene = SCNScene(named: "art.scnassets/scenes/aguacate.scn")!
    case "Huevo para plato"://checked
      scene = SCNScene(named: "art.scnassets/scenes/egg.scn")!
    case "Limón"://checked
      scene = SCNScene(named: "art.scnassets/scenes/limon.scn")!
    case "Manzana"://checked
      scene = SCNScene(named: "art.scnassets/scenes/manzana.scn")!
    case "Melón"://checked
      scene = SCNScene(named: "art.scnassets/scenes/melon.scn")!
    case "Mojarra"://checked
      scene = SCNScene(named: "art.scnassets/scenes/mojarra.scn")!
    case "Naranja"://checked
      scene = SCNScene(named: "art.scnassets/scenes/naranja.scn")!
    case "Pera"://checked
      scene = SCNScene(named: "art.scnassets/scenes/pera.scn")!
    case "Piña"://checked
      scene = SCNScene(named: "art.scnassets/scenes/piña.scn")!
    case "Plátano"://checked
      scene = SCNScene(named: "art.scnassets/scenes/platano.scn")!
    case "Carne en canal de ovino"://checked
      scene = SCNScene(named: "art.scnassets/scenes/vaca.scn")!
    default:
      scene = SCNScene(named: "art.scnassets/scenes/ship.scn")!
    }
      
      // Set the scene to the view
      sceneView.scene = scene
  }
  
  override func viewWillAppear(_ animated: Bool) {
      super.viewWillAppear(animated)
      
      // Create a session configuration
      let configuration = ARWorldTrackingConfiguration()

      // Run the view's session
      sceneView.session.run(configuration)
  }
  
  override func viewWillDisappear(_ animated: Bool) {
      super.viewWillDisappear(animated)
      
      // Pause the view's session
      sceneView.session.pause()
    
  }

  // MARK: - ARSCNViewDelegate
  
/*
  // Override to create and configure nodes for anchors added to the view's session.
  func renderer(_ renderer: SCNSceneRenderer, nodeFor anchor: ARAnchor) -> SCNNode? {
      let node = SCNNode()
   
      return node
  }
*/
  
  func session(_ session: ARSession, didFailWithError error: Error) {
      // Present an error message to the user
      
  }
  
  func sessionWasInterrupted(_ session: ARSession) {
      // Inform the user that the session has been interrupted, for example, by presenting an overlay
      
  }
  
  func sessionInterruptionEnded(_ session: ARSession) {
      // Reset tracking and/or remove existing anchors if consistent tracking is required
      
  }
}

