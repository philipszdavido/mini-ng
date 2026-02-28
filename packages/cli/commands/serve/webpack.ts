import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import path from 'path';
import {transformPlugin} from "compiler/dist/visitor/visitor";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const runServer = async () => {

    const webpackConfig: webpack.Configuration = {
        mode: "development",

        entry: path.resolve(process.cwd(), "src/main.ts"),

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: require.resolve("ts-loader"),
                            options: {
                                transpileOnly: false,
                                getCustomTransformers: (program: any) => ({
                                    before: [transformPlugin(program)]
                                })
                            }
                        }
                    ]
                }
            ]
        },

        resolve: {
            extensions: [".tsx", ".ts", ".js"]
        },

        output: {
            filename: "bundle.js",
            path: path.resolve(process.cwd(), "dist"),
            publicPath: "/"
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(process.cwd(), "index.html"),
                inject: "body" // inject script before </body>
            })
        ]
    };

    const compiler = webpack(webpackConfig);

    const devServerOptions: WebpackDevServer.Configuration = {
        port: 3000,
        host: 'localhost',
        hot: true,
        open: true,
        static: {
            directory: process.cwd(),
        },
    };

    const server = new WebpackDevServer(devServerOptions, compiler);

    console.log('Starting server...');
    await server.start();
};

