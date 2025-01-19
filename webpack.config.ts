import { resolve as _resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';


export const entry = './src/index.tsx';
export const output = {
    filename: 'static/js/[name].[contenthash].js', // Use contenthash for cache-busting
    path: _resolve(__dirname, 'build'), // Output to the 'build' directory
    publicPath: './', // Base path for all assets
};
export const resolve = {
    extensions: ['.ts', '.tsx', '.js'], // Support TypeScript and JavaScript files
};
export const module = {
    rules: [
        {
            test: /\.tsx?$/, // TypeScript loader
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/, // CSS loader
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/i, // Asset loader for images
            type: 'asset/resource',
            generator: {
                filename: 'static/media/[name].[hash][ext]', // Place assets in 'static/media'
            },
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i, // Fonts loader
            type: 'asset/resource',
        },
    ],
};
export const plugins = [
    new CleanWebpackPlugin(), // Cleans the 'build' folder before each build
    new HtmlWebpackPlugin({
        template: './public/index.html', // Template for generating 'index.html'
    }),
];
export const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
