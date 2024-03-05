import { ref, computed } from 'vue'
import { uid } from 'uid'
import { useFirebaseStorage } from 'vuefire'
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

export default function useImage() {
  const url = ref('')
  const storage = useFirebaseStorage()

  const onFileChange = e => {
    console.log("entra");
    try {
      const file = e.target.files[0]
      const filename = uid() + '.jpg'
      const sRef = storageRef(storage, '/products/' + filename)

      // Subir el archivo
      const uploadTask = uploadBytesResumable(sRef, file)

      uploadTask.on('state_changed',
        () => {},
        (error) => {
          console.error('Error al cargar la imagen:', error)
        },
        async () => {
          try {
            // La imagen ya se subió, obtener la URL de descarga
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
            
            // Actualizar la URL en la variable reactiva
            url.value = downloadURL
          } catch (error) {
            console.error('Error al obtener la URL de descarga:', error)
          }
        }
      )
    } catch (error) {
      console.error('Error al cargar la imagen:', error)
    }
  }

  const isImageUploaded = computed(() => !!url.value)

  return {
    url,
    onFileChange,
    isImageUploaded
  }
}
