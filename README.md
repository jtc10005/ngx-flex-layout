# ngx-flexible-layout

## ⚠️ Maintenance Status

**This project is now in maintenance mode with limited active development.**

Due to a change in my employment situation, I will no longer be actively maintaining or upgrading this library. However, **I remain committed to reviewing and merging quality pull requests** from the community.  

If you need new features, bug fixes, or Angular version upgrades: 
- **Submit a PR** - I will review and approve contributions that maintain the library's quality
- **Community contributions are welcome and encouraged**
- Feel free to fork and continue development if you need immediate changes

Thank you to everyone who has used this library.  I hope the community can help keep it going!  🙏

---

## This is an attempt to port @angular/flex-layout to provide support after EOL

The Angular team has decided to depricate the @angular/flex-layout library after v15.  It seems that this is going to cause issues for some people.
In order to try and alleviate these problems, this clone repo/lib was created. 

if you would like to contribute or help maintain please do so.

### Areas needing help:
1. Set up CI/CD pipelines in Github
2. Managing PRs (approvals, etc...)
3. fix tests
4. fix/enhancements (as of this time I am not planning on adding enhancements or fixes. If you want to add enhancements/fixes submit a PR )

**NOTE: The Angular team no longer publishes new releases of the @angular/flex-layout project. Please review [this blog post](https://blog.angular.io/modern-css-in-angular-layouts-4a259dca9127) 
, and [this article](https://medium.com/@caerus.karu/farewell-flex-layout-aaa567023769) for more info.**

See [original @angular/flex-layout here](https://github.com/angular/flex-layout)

---
### Getting Started

Start by installing the Angular Layout library from `npm`

`npm i -s ngx-flexible-layout @angular/cdk`

Next, you'll need to import the Layout module in your app's module.

**app.module.ts**

```ts

import { FlexLayoutModule } from 'ngx-flexible-layout';
...

@NgModule({
    ...
    imports: [ FlexLayoutModule ],
    ...
});
```

After that is configured, you can use the Angular Layout attributes in your HTML tags for flex layout:
```html
<div fxLayout="row" fxLayoutAlign="space-between">
</div>
```