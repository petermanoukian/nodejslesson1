import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
    res.send('<h1>Welcome Home</h1><p><a href="/about">Go to About</a></p>');
});
router.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p><a href="/">Back to Home</a></p>');
});
export default router;
//# sourceMappingURL=web.js.map